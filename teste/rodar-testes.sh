#!/usr/bin/env bash
# Roda a suíte do DS Quiz no Chrome headless.
#
#   bash teste/rodar-testes.sh
#
# Monta uma cópia do index.html com o testes.js no fim, abre no Chrome sem
# interface e lê o resultado do DOM. Sai com código 1 se alguma checagem falhar.
set -u

RAIZ="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
TMP="$RAIZ/teste/.tmp"

# Procura o Chrome nos lugares de sempre (Windows, Linux, macOS).
CHROME="${CHROME:-}"
if [ -z "$CHROME" ]; then
    for candidato in \
        "/c/Program Files/Google/Chrome/Application/chrome.exe" \
        "/c/Program Files (x86)/Google/Chrome/Application/chrome.exe" \
        "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
        "$(command -v google-chrome 2>/dev/null)" \
        "$(command -v chromium 2>/dev/null)"
    do
        if [ -n "$candidato" ] && [ -x "$candidato" ]; then CHROME="$candidato"; break; fi
    done
fi

if [ -z "$CHROME" ]; then
    echo "Chrome não encontrado. Defina CHROME=/caminho/para/chrome e rode de novo." >&2
    exit 2
fi

rm -rf "$TMP"
mkdir -p "$TMP"
cp "$RAIZ/index.html" "$RAIZ/style.css" "$RAIZ/script.js" "$TMP/"
cp "$RAIZ/teste/testes.js" "$TMP/"
printf '<script src="testes.js"></script>\n' >> "$TMP/index.html"

# O Chrome no Windows precisa de caminho nativo; fora dele o caminho já serve.
if command -v cygpath >/dev/null 2>&1; then
    URL="file:///$(cygpath -m "$TMP/index.html")"
    PERFIL="$(cygpath -w "$TMP/perfil")"
else
    URL="file://$TMP/index.html"
    PERFIL="$TMP/perfil"
fi

SAIDA="$("$CHROME" --headless=new --disable-gpu --no-first-run \
    --user-data-dir="$PERFIL" --dump-dom "$URL" 2>/dev/null \
    | sed -n '/<pre id="saida">/,/<\/pre>/p' \
    | sed -e 's/<[^>]*>//g' -e 's/&lt;/</g' -e 's/&gt;/>/g' -e 's/&quot;/"/g' -e 's/&amp;/\&/g')"

if [ -z "$SAIDA" ]; then
    echo "A suíte não produziu saída: provavelmente houve erro de JavaScript ao carregar a página." >&2
    exit 2
fi

echo "$SAIDA"
rm -rf "$TMP"

case "$SAIDA" in
    *TOTAL_FALHAS=0*) exit 0 ;;
    *) exit 1 ;;
esac

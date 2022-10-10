# Primeiro Estágio
FROM nginx:1.21-alpine AS primeiro-estagio
WORKDIR /site

COPY config.toml config.toml
COPY index.html /site/layouts/index.html
COPY _index.md /site/content/_index.md

RUN apk add hugo
RUN hugo --minify --gc
# RUN mv /site/public/* /usr/share/nginx/html  * esta linha de comando era do primeiro estágio sem o segundo build *

# ENTRYPOINT ["nginx", "-g", "daemon off;"]  * esta linha de comando era do primeiro estágio sem o segundo build *

# Segundo estágio
FROM nginx:1.21-alpine AS segundo-estagio
COPY --from=primeiro-estagio /site/public/ /usr/share/nginx/html
ENTRYPOINT ["nginx", "-g", "daemon off;"]
## EximiaIT v2.2

+ Se actualizan: **styles.css** y **responsive.css**
+ Actualizar primer tag **section** de la base html del detalle de portfolio (se pisan los templates html):
1. div class="stg-col-6 ~~stg-m-column-reverse~~"
div class="stg-col-6 *stg-tp-col-12 stg-m-bottom-gap-m*"

2. div class="stg-m-bottom-gap-~~l~~"
div class="stg-m-bottom-gap-*m*"

3. div class="stg-row stg-valign-bottom eximia-hero02-row stg-normal-gap stg-m-column-reverse stg-m-valign-middle" data-unload="fade-up"
div class="stg-row stg-valign-bottom eximia-hero02-row stg-normal-gap stg-m-valign-middle stg-m-bottom-gap-m" data-unload="fade-up"

4. div class="align-left ~~m-align-right"~~ data-appear="fade-right"
div class="align-left" data-appear="fade-right"

5. div class="eximia-hero-info-line" data-stagger-appear="fade-bottom" data-delay="200" data-stager-delay="100" data-unload="fade-up"
div class="eximia-hero-info-line *stg-m-bottom-gap-m*" data-stagger-appear="fade-bottom" data-delay="200" data-stager-delay="100" data-unload="fade-up"

6. div class="stg-col-6 ~~stg-tp-col-6 stg-tp-offset-6"~~ data-unload="fade-right"
div class="stg-col-6 *stg-tp-col-12"* data-unload="fade-right"


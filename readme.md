## EximiaIT v2.3

+ Se actualizan: **index.html** y **responsive.css**

index.html:
```html
                <nav class="eximia-nav">
                    <ul class="main-menu" data-stagger-appear="fade-down" data-stagger-delay="75">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#nosotros">Nosotros</a></li>
                        <li><a href="#servicios">Servicios</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>

                        <ul class="eximia-socials-list" data-stagger-appear="fade-down" data-stagger-delay="75">
                            <li class="in-view" data-delay="0" data-unload="none" data-threshold="0.5">
                                <a href="https://www.linkedin.com/company/eximiait" target="_blank"
                                    class="eximia-socials-linkedin"><i></i></a>
                            </li>
                            <li class="in-view" data-delay="75" data-unload="none" data-threshold="0.5">
                                <a href="https://x.com/eximia_it" target="_blank" class="eximia-socials-x"><i></i></a>
                            </li>
                            <li class="in-view" data-delay="0" data-unload="none" data-threshold="0.5">
                                <a href="https://www.instagram.com/eximiait" target="_blank"
                                    class="eximia-socials-instagram"><i></i></a>
                            </li>
                            <li class="in-view" data-delay="0" data-unload="none" data-threshold="0.5">
                                <a href="https://www.youtube.com/@eximiait6946" target="_blank"
                                    class="eximia-socials-youtube"><i></i></a>
                            </li>
                            <li class="in-view" data-delay="0" data-unload="none" data-threshold="0.5">
                                <a href="mailto:info@eximiait.com.ar" target="_blank"
                                    class="eximia-socials-email"><i></i></a>
                            </li>
                        </ul>
                    </ul>
                </nav>
```

---


## EximiaIT v2.2

+ Se actualizan: **styles.css** y **responsive.css**
+ Actualizar primer tag **section** de la base html del detalle de portfolio (se pisan los templates html):

```html
            <section data-padding="none">
                <div class="eximia-hero-block eximia-hero-type02 stg-bottom-gap-section stg-top-gap-l">
                    <div class="stg-row stg-valign-middle stg-no-gap">
                        <div class="stg-col-6 stg-tp-col-12 stg-m-bottom-gap-m">
                            <div class="stg-m-bottom-gap-m">
                                <h1 class="eximia-page-title" data-split-appear="fade-up" data-split-delay="100"
                                    data-split-by="line" data-unload="fade-left">Capacitación Kubernetes
                                </h1>
                            </div>
                            <div class="stg-row stg-valign-bottom eximia-hero02-row stg-normal-gap stg-m-valign-middle stg-m-bottom-gap-m"
                                data-unload="fade-up">
                                <div class="stg-col-4 stg-tp-col-5">
                                    <div class="align-left" data-appear="fade-right">
                                        En la Honorable Cámara de Senadores de Santa Fe, comenzaron una transformación
                                        digital, y actualización tecnológica con el enfoque en la adopción de
                                        tecnologías de contenedores.
                                    </div>
                                </div>
                            </div>
                            <div class="eximia-hero-info-line stg-m-bottom-gap-m" data-stagger-appear="fade-bottom"
                                data-delay="200" data-stager-delay="100" data-unload="fade-up">
                                <div class="eximia-meta">
                                    Cliente: <span>Honorable Cámara de Senadores de Santa Fe</span>
                                </div>
                                <div class="eximia-meta">
                                    Servicio: <span>Capacitaciones</span>
                                </div>
                                <div class="eximia-meta">
                                    Fecha: <span>Julio 2024</span>
                                </div>
                            </div>
                        </div>
                        <div class="stg-col-6 stg-tp-col-12" data-unload="fade-right">
                            <div class="eximia-parallax-media" data-appear="fade-left" data-delay="200">
                                <img class="eximia-lazy" src="img/null.png" data-src="img/portfolio/kubernetes.jpg"
                                    alt="Capacitación Kubernetes" width="776" height="1280">
                            </div>
                        </div>
                    </div>
                </div>
            </section>
```

---


##### Modificaciones:
   + div class="stg-col-6 ~~stg-m-column-reverse~~"
   + div class="stg-col-6 *stg-tp-col-12 stg-m-bottom-gap-m*"

---

   + div class="stg-m-bottom-gap-~~l~~"
   + div class="stg-m-bottom-gap-*m*"

---

   + div class="stg-row stg-valign-bottom eximia-hero02-row stg-normal-gap stg-m-column-reverse stg-m-valign-middle" data-unload="fade-up"
   + div class="stg-row stg-valign-bottom eximia-hero02-row stg-normal-gap stg-m-valign-middle stg-m-bottom-gap-m" data-unload="fade-up"

---

   + div class="align-left ~~m-align-right"~~ data-appear="fade-right"
   + div class="align-left" data-appear="fade-right"

---

   + div class="eximia-hero-info-line" data-stagger-appear="fade-bottom" data-delay="200" data-stager-delay="100" data-unload="fade-up"
   + div class="eximia-hero-info-line *stg-m-bottom-gap-m*" data-stagger-appear="fade-bottom" data-delay="200" data-stager-delay="100" data-unload="fade-up"

---

   + div class="stg-col-6 ~~stg-tp-col-6 stg-tp-offset-6"~~ data-unload="fade-right"
   + div class="stg-col-6 *stg-tp-col-12"* data-unload="fade-right"
   
---


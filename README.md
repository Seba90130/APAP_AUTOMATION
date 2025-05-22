#Test Suite y Casos de Prueba

https://coda.io/d/Prueba-tecnica-APAP_d00G5Yl2fZP

# 🚀 Selenium Automation Project

Este proyecto contiene pruebas automatizadas con **Selenium WebDriver** usando **JavaScript (ESModules)**, **Mocha** como framework de testing, y **Allure** para la generación de reportes detallados.  

Ideal para proyectos E2E, validaciones de UI y ejecución de pruebas en distintos contextos como iFrames y pestañas.

---

## 📦 Tecnologías Utilizadas

- ✅ **Selenium WebDriver** – Automatización del navegador.
- ✅ **Mocha** – Framework de pruebas.
- ✅ **Allure** – Generación de reportes visuales.
- ✅ **Node.js** (con soporte a módulos ES6).
- ✅ **JavaScript** (configurado con `type: "module"` para importar con `import`).

---

## 🛠️ Instalación

### 1. Clona este repositorio:

bash:

git clone https://github.com/Seba90130/APAP_AUTOMATION.git

cd APAP_AUTOMATION

npm install

Esto instalará:

- selenium-webdriver
- mocha
- allure-mocha
- allure-commandline

📁 Estructura del Proyecto

APAP_AUTOMATION/

├── helpers/               # Funciones auxiliares (switch de iframe, setup driver)

│   ├── driver.js

│   └── switchToIframes.js

├── pages/                 # Page Objects (POM)

│   └── base.page.js

├── test/                  # Archivos de prueba

│   └── main.spec.js

├── allure-results/        # Resultados de prueba (auto-generado)

├── package.json

└── README.md


🧪 Scripts de Pruebas:
En package.json tienes definidos los siguientes scripts:

Scripts	Descripción:

- npm run tests	Ejecuta todos los tests del directorio /test.
- npm run test1	Ejecuta el test que imprime los textos de los iframes.
- npm run test2	Ejecuta el test que imprime el texto de la nueva pestaña.
- npm run parallel	Ejecuta todos los tests en paralelo con Mocha.
- npm run server-allure	Abre el reporte generado con Allure.




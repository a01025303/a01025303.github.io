// 1. Posición del mouse 
function posMouse (event) {
    const mouseP = document.getElementById('mousePosition') //Obtener elemento
    mouseP.textContent = `Posición del mouse: ${event.screenX} - ${event.screenY}` // Mostrar coordenadas
}

// 2. Obtener el nombre y apellido y mostrar nombre completo
function inputNames (event) {
    event.preventDefault() // Quitar la funcionalidad default de submit (para que no mande la info a otro lado)
    // Obtener datos
    const Fname = document.getElementById('fname') 
    const Lname = document.getElementById('lname')
    const Cname = document.getElementById('nombreC')
    // Mostrar nombre completo
    Cname.textContent =  `Nombre completo: ${Fname.value} ${Lname.value} `
}

//3. Agregar una fila o columna a la tabla y mostrar tabla nueva
// Agregar fila
function addRow (event) {
    const tabla = document.getElementById("sampleTable") // Leer tabla
    const rowsExistentes = tabla.rows.length // número de filas de la tabla 
    const colsExistentes = tabla.rows[0].cells.length // número de columas de la tabla
    const filaNueva = tabla.insertRow(tabla.rows.length) // insertar fila nueva
    // Para todas las columnas, agregar una celda en la fila nueva (tr)
    for (i = 0; i < colsExistentes; i++) {
        let celdaNueva = document.createElement("td") // celda nueva
        let textoCelda = document.createTextNode("Row "+(rowsExistentes+1)+" column "+(i+1)) // contenido nuevo
        celdaNueva.appendChild(textoCelda); // agregar contenido a celda
        filaNueva.appendChild(celdaNueva); // agregar celda a la fila
      }
}
// Agregar columna
function addCol (event) {
    const tabla = document.getElementById("sampleTable") // Leer tabla
    const colsExistentes = tabla.rows[0].cells.length // número de columas de la tabla
    const rowsExistentes = tabla.rows.length // número de filas de la tabla 
    // Para cada fila, agregar una columna (td)
    for (i = 0; i < rowsExistentes; i++) {
        let celdaNueva = document.createElement("td") // celda nueva
        let textoCelda = document.createTextNode("Row "+(i+1)+" column "+(colsExistentes+1)) // contenido nuevo
        celdaNueva.appendChild(textoCelda) // agregar contenido a la celda
        tabla.rows[i].appendChild(celdaNueva) // agregar columna
      }
}

// 4. Cambiar contenido de celda en la tabla existente, recibiendo la posición de la fila y columna y el contenido que se quiere insertar
function changeContent (event) {
    const tabla = document.getElementById("myTable") // Leer tabla
    const colsExistentes = tabla.rows[0].cells.length // número de columnas en la tabla
    const rowsExistentes = tabla.rows.length // número de filas de la tabla 
    const chRow = document.getElementById('rowChange') // Leer fila a cambiar
    const chCol = document.getElementById('colChange') // leer columna a cambiar
    const chCont = document.getElementById('contChange') // leer nuevo contenido

    if(chRow.value <= rowsExistentes && chCol.value <= colsExistentes){ // si las filas y columnas sí existen en tabla
        let newContent = chCont.value // contenido nuevo --> valor real
        tabla.rows[chRow.value-1].cells[chCol.value-1].innerHTML = newContent // editar contenido en las coordenadas
    }
}

// 5. Agregar o quitar colores a la lista de opciones
// Agregar colores
function addColor (event) {
    const colores = ["Yellow", "Aqua", "Beige", "Blue", "Cyan", "Gold", "Grey", "Indigo", "Lavender", "Lime", "Pink", "Purple", "Orange", "Salmon", "Violet", "Green", "Red", "White", "Black"] // Nombres de colores
    const lista = document.getElementById("colorSelect") // leer lista
    const randomElement = Math.floor(Math.random() * (colores.length)) // elegir un índice random del arreglo de colores
    let elementoNuevo = document.createElement("option") // crear nueva opción (nuevo elemento)
    let textoNuevo = document.createTextNode(colores[randomElement]) // elegir un color (a partir de índice)
    elementoNuevo.appendChild(textoNuevo) // agregar texto a la nueva opción
    lista.appendChild(elementoNuevo) // agregar nueva opción a la lista
}

// Eliminar color de la lista (último color)
function removeColor (event) {
    const lista = document.getElementById("colorSelect") // obtener lista
    if(lista.length > 0) // mientras que la lista tenga elementos
        lista.removeChild(lista[lista.length-1]) // eliminar última opción de color
}

// 6. Cambiar imagen y su tamaño (ancho y largo random entre 300 y 600 px) al poner mouse sobre ésta
// En caso de tener el mouse sobre la imagen
function differentImage (x) {
    let widthRandom = Math.floor( Math.random() * (600 - 300) + 300) // ancho random en el rango 
    let heightRandom = Math.floor( Math.random() * (600 - 300) + 300)  // largo random en el rango 
     // Link a nueva imagen
    x.src = "https://s.yimg.com/ny/api/res/1.2/E7laI2RKh5EPBDFO3NXq6g--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQ3Nw--/https://s.yimg.com/uu/api/res/1.2/cgf._bZWNyuziq6ie5CUIg--~B/aD04ODQ7dz0xMTg2O2FwcGlkPXl0YWNoeW9u/http://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/5f2acfff720e9a2c822eaa0b4f37e3dd"
    x.style.height = heightRandom+"px" // nuevo alto
    x.style.width = widthRandom + "px" // nuevo ancho
}
// En caso de tener el mouse fuera de la imagen
function originalImage(x)
{
    // Imagen original
    x.src = "http://placekitten.com/200/300"
    // Tamaños originales
    x.style.height = "auto"
    x.style.width = "auto"
}

//Event listeners (en los casos en los que son requeridos)
document.addEventListener("mousemove", posMouse) 
document.addEventListener("submit", inputNames)
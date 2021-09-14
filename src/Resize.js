//esta funcion me permite captar el tamaño de la pantalla y su actualizacion

import React from 'react'

function debounce(fn, ms) {
  let timer
  return _ => {
    clearTimeout(timer)
    timer = setTimeout(_ => {
      timer = null
      fn.apply(this, arguments)
    }, ms)
  };
}

export default debounce
import {navbar} from './common.js'
let nav = document.getElementById("header")
nav.innerHTML = navbar()
import {footer} from './common.js'
let foot = document.getElementById("footer")
foot.innerHTML = footer()
console.log(foot)


(()=>{const e=document.querySelector(".slider"),t=e.querySelector(".slider__value"),r=e.querySelector(".slider__handler"),l=()=>{const l=r.value,n=l/r.max*100;t.textContent=l,e.style.setProperty("--value",`${n}%`)};r.addEventListener("input",l),l()})();
import{a as y,S as b,i as d}from"./assets/vendor-tnUJPedx.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function s(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(r){if(r.ep)return;r.ep=!0;const t=s(r);fetch(r.href,t)}})();const v="https://pixabay.com/api/",w="48226781-c314bf294542f2e13595e23de";async function L(e,o=1,s=12){const a=new URLSearchParams({key:w,q:e,image_type:"photo",orientation:"horizontal",safesearch:"true",page:o,per_page:s});try{return(await y.get(`${v}?${a}`)).data}catch(r){throw console.error("Error fetching images:",r),r}}let n;function S(e){const o=document.querySelector(".gallery"),s=e.map(({largeImageURL:a,webformatURL:r,tags:t,likes:c,views:p,comments:g,downloads:h})=>`
          <li class="gallery-item">
            <article class="card">
              <a class="card-link" href="${a}" target="_blank" rel="noopener noreferrer">
                <img class="card-image" src="${r}" alt="${t}" />
              </a>
              <div class="card-container">
                <div class="card-item">
                  <p class="card-title"><i class="fas fa-heart"></i> Likes</p>
                  <p class="card-count">${c}</p>
                </div>
                <div class="card-item">
                  <p class="card-title"><i class="fas fa-eye"></i> Views</p>
                  <p class="card-count">${p}</p>
                </div>
                <div class="card-item">
                  <p class="card-title"><i class="fas fa-comment"></i> Comments</p>
                  <p class="card-count">${g}</p>
                </div>
                <div class="card-item">
                  <p class="card-title"><i class="fas fa-download"></i> Downloads</p>
                  <p class="card-count">${h}</p>
                </div>
              </div>
            </article>
          </li>
        `).join("");o.insertAdjacentHTML("beforeend",s),n?n.refresh():n=new b(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"})}function f(){document.querySelector(".loader").classList.remove("is-hidden")}function q(){document.querySelector(".loader").classList.add("is-hidden")}function C(){const e=document.querySelector(".gallery");e.innerHTML=""}function l(e){const o=document.querySelector(".btn-load-more");o.style.display=e?"block":"none"}let i=1,u="";document.querySelector(".gallery");const E=document.querySelector(".search-form"),P=document.querySelector('input[name="searchQuery"]'),$=document.querySelector(".btn-load-more");E.addEventListener("submit",B);$.addEventListener("click",I);async function B(e){if(e.preventDefault(),u=P.value.trim(),!u){d.error({title:"Error",message:"Please enter a search query.",position:"topRight",backgroundColor:"red",messageColor:"white",titleColor:"white"});return}i=1,C(),f(),await m()}async function I(){i+=1,f(),await m(),M()}async function m(){try{const e=await L(u,i);S(e.hits),i===1&&l(!0),e.totalHits<=i*12?(l(!1),d.info({title:"Info",position:"topRight",message:"We're sorry, but you've reached the end of search results.",backgroundColor:"green",messageColor:"white",titleColor:"white"})):l(!0)}catch(e){console.error("Error fetching images:",e),d.error({title:"Error",message:`Error: ${e.message}`,position:"topRight",backgroundColor:"red",messageColor:"white",titleColor:"white"})}finally{q()}}function M(){const e=document.querySelector(".gallery a");if(e){const{height:o}=e.getBoundingClientRect();window.scrollBy({top:o*2.6,behavior:"smooth"})}}
//# sourceMappingURL=index.js.map

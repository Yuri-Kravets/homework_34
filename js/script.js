"use strict";
(function() {
    const form = document.querySelector('#form');
    
    form.addEventListener('submit', event => {
        event.preventDefault();
        const inpData = Array.from(
            event.target.querySelectorAll('input,select,textarea,checkbox')
        )
            .reduce((accum,item) => {
                accum[item.name] = item.value;
                return accum;
            },{});
            
        localStorage.setItem (
            'inputData',
            JSON.stringify(inpData)
        );
    });

})();






        // const newDoc = document.implementation.createHTMLDocument(title)
        // function makeDocument() {
        //     let frame = document.getElementById("theFrame");
        
        //     let doc = document.implementation.createHTMLDocument("New Document");
        //     let p = doc.createElement("p");
        //     p.innerHTML = "This is a new paragraph.";

        //     try {
        //         doc.body.appendChild(p);
        //         } catch(e) {
        //             console.log(e);
        //         }
        //         let destDocument = frame.contentDocument;
        //         let srcNode = doc.documentElement;
        //         let newNode = destDocument.importNode(srcNode, true);
        //         destDocument.replaceChild(newNode, destDocument.documentElement);
        //     }





  // let select = document.querySelector('#select-1');

        // select.onchange = function () {
        //     console.log(select.value); 
        // }
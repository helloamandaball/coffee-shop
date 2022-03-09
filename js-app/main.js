const url = "https://localhost:44373/api/beanvariety/";

const button = document.querySelector("#run-button");
const beanBag = document.querySelector("#bean-bag")

// button.addEventListener("click", () => {
//     getAllBeanVarieties()
//     .then(beanVarieties => {
//             let beanBag = ""
            
//             beanVarieties.forEach(bean => {
//                 beanBag +=`
//                     <div>
//                         <p><b>BEAN NAME</b>: ${bean.name}</p>
//                         <p><b>REGION</b>: ${bean.region}</p>
//                         <p><b>NOTES</b>: ${bean.notes}</p>
//                      </div>
//                      <hr />
//                 `
//             console.log(beanVarieties);
//             return beanBag
//         })
//     })
// })

button.addEventListener("click", () => {
    getAllBeanVarieties()
        .then(beanVarieties => {
            beanVarieties.map(beans => {
                beanBag.innerHTML += BeanCard(beans)
            })
            console.log(beanVarieties);
        })
});

function BeanCard(beanObj) {
    return `
        <div>
            <p><b>BEAN NAME</b>: ${beanObj.name}</p>
            <p><b>REGION</b>: ${beanObj.region}</p>
            <p><b>NOTES</b>: ${beanObj.notes}</p>
        </div>
        <hr />
    `;
}

function getAllBeanVarieties() {
    return fetch(url).then(resp => resp.json());
}
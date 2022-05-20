let fileInput = document.getElementById('fileInput');
let table = document.getElementById('table')
let tbody = document.createElement('tbody')
let removeAll= document.querySelector('.remove-all')
let allSection= document.querySelector('.allSection')
fileInput.addEventListener('change', function () {
    [...this.files].forEach(file => {
      
      
        if (file.type.startsWith('image/')) {
            let reader = new FileReader();
            reader.onload = function () {
                table.style.visibility = 'visible'
                let colose = document.createElement('i')
                colose.classList.add('fa-solid');
                colose.classList.add('fa-ban');
                let tr =document.createElement('tr')
                let tdImg = document.createElement('td')
                let tdName = document.createElement('td')
                let tdSize = document.createElement('td')
                let tdDelete = document.createElement('td')
                tdDelete.appendChild(colose);
                tdName.innerText = file.name
                tdSize.innerText =file.size
                let img = document.createElement('img')
               
               tr.appendChild(tdDelete)
                img.setAttribute('src', reader.result);
                tdImg.appendChild(img);
                tdDelete.appendChild(colose)
                tr.appendChild(tdImg)
               tr.appendChild(tdName)
               tr.appendChild(tdSize)
               tr.appendChild(tdDelete)
                tbody.appendChild(tr)
                table.appendChild(tbody)

               removeAll.style.display = 'block'


                removeAll.addEventListener('click', function () {
                    allSection.remove()
                    fileInput.value =''
                    
                })
                colose.addEventListener('click', function () {
                    tr.remove()
                    fileInput.value =''
                })
            }
            reader.readAsDataURL(file);
        }
        else {
            console.log("Format duz deyil")
            this.value = ''
        }
    })
})

let imgUploadBox = document.getElementById('imgUploadBox');

imgUploadBox.addEventListener('click', function (e) {
    fileInput.click();
})
fileInput.style.display = 'none'

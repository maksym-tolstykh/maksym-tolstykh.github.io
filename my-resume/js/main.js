const projectList = document.querySelector('.my_project_list')
const educationList = document.querySelector('.edication_list')
const typedTextSpan = document.querySelector('.typed-text');
const cursorSpan = document.querySelector('.cursor');

const renderItems = (data) =>{
    data.projects.forEach(item => {
        const {p_t, projectLink} = item
        const li = document.createElement('li')
        li.classList.add('project_item')

        li.innerHTML=`
            <span class="my_project_text">
              <a class="my_project_link" target="_blank" href="${projectLink}">${projectLink}</a>
              <span class="border-point"></span>
              <span class="p_t"> <span class="open">[</span> ${p_t} <span class="open">]</span></span>
            </span>
        `
        projectList.append(li)
    });

    data.education.forEach(item => {
        const {name,years,specialty, country} = item
        const div = document.createElement('div')
        div.classList.add('education_item')

        div.innerHTML= `
        <h4><span class="work">${name}</span></h4>
        <h5>${specialty}</h5>
        <p class="work_period">${years} <span class="border">|</span> ${country}</p>
        `
        educationList.append(div)
    });
}


fetch('https://resume-data-df977-default-rtdb.firebaseio.com/db.json')
    .then((res)=> res.json())
    .then((data)=>  renderItems(data))
    .catch(err => console.log(err))



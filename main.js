
function openNav() {

  document.getElementById("myTopnav").style.display = 'block';
  document.body.style.backgroundColor = "rgba(0,0,0,0.5)";
};

function closeNav() {
  document.getElementById('myTopnav').style.display = 'none';
  document.body.style.backgroundColor = "white";
};


function sendMail(e) {
  e.preventDefault()
  var params = {
    name: document.getElementById('name').Value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value
  };

  const serviceID = "service_f3mbn3p";
  const templateID = "template_flau55d";

  emailjs.send(serviceID, templateID, params)
 .then((res) => {
  console.log('Successful', res)
 },((error) => {
  console.log('failed', error)
 }) 
 )
    // .then((res) => {
    //   document.getElementById('name').value = "";
    //   document.getElementById('email').value = "";
    //   document.getElementById('message').value = "";
    //   console.log(res);
    //   alert("Email sent Successfully");
    // })
    // .catch((err) => console.log(err));
}
const hiddenElements= document.querySelectorAll('.hidden');

const appearOptions = {
  threshold:0,
  rootMargin: '0px 0px -200px 0px'
};

const appearOnscroll = new IntersectionObserver((entries,appearOnscroll) =>{
  entries.forEach(entry =>{
    if(!entry.isIntersecting){
    return;  
    }else{
      entry.target.classList.add('show');
      appearOnscroll.unobserve(entry.target);
    }
  });
}, appearOptions);

hiddenElements.forEach((el) => appearOnscroll.observe(el));
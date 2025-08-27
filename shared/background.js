// Background Particle dengan Three.js
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById("bgCanvas"), alpha:true });
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.z = 5;

const particlesCount = 5000;
const positions = new Float32Array(particlesCount*3);
for(let i=0;i<particlesCount*3;i++){positions[i]=(Math.random()-0.5)*10;}
const particlesGeometry = new THREE.BufferGeometry();
particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions,3));
const particlesMaterial = new THREE.PointsMaterial({ color:0x00ffff,size:0.05,transparent:true,opacity:0.8});
const particlesMesh = new THREE.Points(particlesGeometry,particlesMaterial);
scene.add(particlesMesh);

let mouseX=0, mouseY=0;
document.addEventListener('mousemove', e=>{mouseX=(e.clientX/window.innerWidth-0.5)*2; mouseY=-(e.clientY/window.innerHeight-0.5)*2;});
document.addEventListener('touchmove', e=>{if(e.touches.length>0){const t=e.touches[0]; mouseX=(t.clientX/window.innerWidth-0.5)*2; mouseY=-(t.clientY/window.innerHeight-0.5)*2;}},{passive:true});

function animate(){
  requestAnimationFrame(animate);
  particlesMesh.rotation.y+=0.001+mouseX*0.001;
  particlesMesh.rotation.x+=0.0005+mouseY*0.001;
  renderer.render(scene,camera);
}
animate();
window.addEventListener('resize', ()=>{camera.aspect=window.innerWidth/window.innerHeight; camera.updateProjectionMatrix(); renderer.setSize(window.innerWidth,window.innerHeight);});

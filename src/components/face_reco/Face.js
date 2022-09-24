import React from 'react';
import * as faceapi from 'face-api.js';


const Face = () => {
  Promise.all([
    faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
    faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
    faceapi.nets.ssdMobilenetv1.loadFromUri('/models')
  ]).then(start)

  const imageUpload = document.getElementById('imageUpload')
  
  async function start() {
    // const container = document.createElement('div')
    // container.style.position = 'relative'
    // document.body.append(container)
    const labeledFaceDescriptors = await loadLabeledImages()
    const faceMatcher = new faceapi.FaceMatcher(labeledFaceDescriptors, 0.6)
    let image
    // let canvas
    document.body.append('Loaded')
    imageUpload.addEventListener('change', async () => {
      // if (image) image.remove()
      // if (canvas) canvas.remove()
      image = await faceapi.bufferToImage(imageUpload.files[0])
      // console.log(image);
      // container.append(image)
      // canvas = faceapi.createCanvasFromMedia(image)
      // container.append(canvas)
      const displaySize = { width: image.width, height: image.height }
      // faceapi.matchDimensions(canvas, displaySize)
      const detections = await faceapi.detectAllFaces(image).withFaceLandmarks().withFaceDescriptors()
      const resizedDetections = faceapi.resizeResults(detections, displaySize)
      const results = resizedDetections.map(d => faceMatcher.findBestMatch(d.descriptor))
      console.log(results);
      // results.forEach((result, i) => {
      //   const box = resizedDetections[i].detection.box
      //   const drawBox = new faceapi.draw.DrawBox(box, { label: result.toString() })
      //   drawBox.draw(canvas)
      // })
    })
  }

  // function loadLabeledImages() {
  //   const labels = ['Black Widow', 'Captain America', 'Captain Marvel', 'Devkinandan', 'Hawkeye', 'Jim Rhodes', 'Thor', 'Tony Stark']
  //   return Promise.all(
  //     labels.map(async label => {
  //       const descriptions = []
  //       for (let i = 1; i < 2; i++) {
  //         const img = await faceapi.fetchImage(`../labeled_images/${label}/${i}.jpg`)
  //         console.log(`${label}/${i} and image = ${img}`)
  //         const detections = await faceapi.detectSingleFace(img).withFaceLandmarks().withFaceDescriptor()
  //         console.log(label + i + JSON.stringify(detections))
  //         descriptions.push(detections.descriptor)
  //       }
  
  //       return new faceapi.LabeledFaceDescriptors(label, descriptions)
  //     })
  //   )
  // }

   async function loadLabeledImages() {
    const label = 'devki'
    const descriptions = []
    const img = await faceapi.fetchImage(`../labeled_images/Devkinandan/1.jpg`)
    const detections = await faceapi.detectSingleFace(img).withFaceLandmarks().withFaceDescriptor()
    descriptions.push(detections.descriptor)
    console.log(descriptions);
    return new faceapi.LabeledFaceDescriptors(label, descriptions)
  }
  



  return (
    <>
    <div>face</div>
    <input type="file" id="imageUpload" />
    </>
  );
};
export default Face;


// import React from 'react';
// import * as faceapi from 'face-api.js';


// const Face = () => {
//   return (
//     <>
    
//     </>
//   );
// };
// export default Face;

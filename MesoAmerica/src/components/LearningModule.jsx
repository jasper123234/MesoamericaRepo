function LearningModule({text1,text2,img1,img2}){
  return(
    <div>
      <div class = "b border border-yellow-900 c p-3 mt-3  border-4">
        <h1 class  = "text-xl text-yellow-900 text-center">
          {text1}
        </h1>
        <img
          src={img1}
          alt="img1"
          width="200"
          height="200"
        />
      </div>
      <div class = "b border border-yellow-900 c p-3 mt-3  border-4">
        <h1 class  = "text-xl text-yellow-900 text-center">
          {text2}
        </h1>
        <img
          src={img2}
          alt="img1"
          width="200"
          height="200"
        />
      </div>
    </div>
  )
}
export default LearningModule;
function LearningModule({title,info,img1}){
  return(
    <div>
      <div class = "b border border-yellow-900 c p-3 mt-3  border-4">
        <h1 class  = "text-xl text-yellow-900 text-center">
          {title}
        </h1>
        <img
          src={img1}
          alt="img1"
          width="200"
          height="200"
        />
      </div>
      <div class = "b border border-yellow-900 c p-3 mt-3  border-4">
        <p class = "text-lg text-yellow-900 text-center">
          {info}
        </p>
       
      </div>
    </div>
  )
}
export default LearningModule;
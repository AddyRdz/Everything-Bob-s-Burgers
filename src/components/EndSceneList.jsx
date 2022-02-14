import{ Link } from 'react-router-dom'

function EndSceneList(props){
  return(
    <div>
      <p>This is the EndScene List Page </p>
      <section className="container">

        {props.EndSceneList.map( (allScenes,index)=>{
          return(
            <Link to={`/endCreditSequence/${allScenes.id}`} key={index} >
              <div className="card">
                <div className="card-image">
                  <img src={allScenes.image}
                  alt="imageOfScene"/>
                  <ul>
                    <li>{allScenes.season}</li>
                  </ul>

                </div>
              </div>
            </Link>
          )
        })}
      </section>
    </div>
  )
}


export default EndSceneList
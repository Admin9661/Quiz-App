/* eslint-disable react/prop-types */
function Section(props) {
  return (<>
      <section style={{backgroundImage:"url(images/" +props.photo+ ")"}}>
            <div id="top">
                <h1>{props.heading}</h1>
                <p>{props.tagline}</p>
          </div>
          <div id="bottom">
              <div className="cta">
                  <button>{props.leftbtn}</button>
                  {props.rightbtn ? <button>{props.rightbtn}</button> : ""}
                  {props.downArrow ? <img src={`images/${props.downArrow}`} alt="" /> : "" }
              </div>
          </div>
      </section>
    </>
  )
}

export default Section

import React, { Component } from "react"

class FieldDashboard extends Component {

  milkCows = () => {
    for (var i=0; i<this.props.field.contents.length; i++) {
      this.props.field.contents[i].yieldMilk()
    }
  }

  render() {
    return (
      <div className="FieldDashboard">
        <h2>Field</h2>
        {this.props.field.contents[0] && (
          <p>
            In this field you have {this.props.field.contents.length}{" "}
            {this.props.field.contents[0].name}s
            {this.props.field.contents[0].name === "Cow" && (
              <button onClick={this.milkCows}>Milk them</button>
            )}
          </p>
          
        )}
        {this.props.field.contents.map((item, i) => (
          <>
            {item.showUI && (
              <div className="fieldItem">
                <h3><img src={item.imgUrl} alt={item.name} /> {item.name}</h3>
                <dl>
                  <dt>Hunger</dt><dd>{item.hunger}</dd>
                </dl>
              </div>
            )}
          </>
        ))}
      </div>
    )
  }
}

export default FieldDashboard

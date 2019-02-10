import React, { Component } from 'react'

class Comments extends Component {
  render() {
    return (
      <div className="post">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              
          <div className="card card-body mb-3">
                <div className="row">
                  <div className="col-md-2">
                    
                  <br/> 
                    <h3 className="text-center">John Doe</h3>
                  </div>
                  <div className="col-md-10">
                    <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint possimus corporis sunt necessitatibus! Minus
                      nesciunt soluta suscipit nobis. Amet accusamus distinctio cupiditate blanditiis dolor? Illo perferendis
                  eveniet cum cupiditate aliquam?</p>
                    <span className="float-right">
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star"></span>
                      <span className="fa fa-star"></span>
                    </span>
                  </div>
                </div>
              </div>
              
          <div className="post-form mb-3">
                <div className="card card-info">
                  <div className="card-header bg-info text-white">
                    Say Somthing...
              </div>
                  <div className="card-body">
                    <form>
                      <div className="form-group">
                        <textarea className="form-control form-control-lg" placeholder="Your comment goes here"></textarea>
                      </div>
                      <button type="submit" className="btn btn-dark">Submit</button>
                    </form>
                  </div>
                </div>
              </div>
              
          <div className="comments">
                
            <div className="card card-body mb-3">
                  <div className="row">
                    <div className="col-md-2">
                      
                      <br />
                      <h6 className="text-center">name 1</h6>
                    </div>
                    <div className="col-md-10">
                      <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint possimus corporis sunt necessitatibus! Minus
                    nesciunt soluta suscipit nobis.</p>
                    </div>
                  </div>
                </div>

                <div className="card card-body mb-3">
                  <div className="row">
                    <div className="col-md-2">
                      <br />
                      <h6 className="text-center">name 2</h6>
                    </div>
                    <div className="col-md-10">
                      <p className="lead"> Amet accusamus distinctio cupiditate blanditiis dolor? Illo perferendis eveniet cum cupiditate aliquam?</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Comments
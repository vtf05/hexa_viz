import React from 'react';
import { Form } from 'react-bootstrap';
import './create.css';
function Create(props) {
    return (
        <div>
            <div class="panel deep-purple"></div>
	<main class="freeBird">
		<div class="container" >
			<div class="row CreateLay"  >
				<div class="col-md-7 m-x-auto pull-xs-none">
					<div class="jumbotron">
						<h2 class="h2-responsive"><strong>Create</strong></h2>
						<div class="card-block">
							<Form action="#">
								<h5 class="h5-responsive">Title</h5>
								<div class="md-form">
									<input type="text" id="form1" class="form-control"/>
									<label for="form1" class=""> </label>
								</div>
                <div class="md-form">
                      <div>
								<h5 class="h5-responsive">Subject</h5>
								<div class="md-form">
									<i class="fa fa-user prefix"></i>
									<input type="text" id="form2" class="form-control"/>
									<label for="form2"></label>
								</div>

							
								<h5 class="h5-responsive">Description</h5>
								<div class="md-form">
									<i class="fa fa-envelope prefix"></i>
									<input type="email" id="form9" class="form-control validate md-textarea"/>
									
								</div>
                                
                                <label class="file">
                                 <input type="file" id="file" aria-label="File browser example"/>
                                     <span class="file-custom"></span>
                                </label>

								<div class="text-xs-left">
									<button class="btn btn-primary buttonCss">Submit</button>
								</div>
						</div>
						

					</div>
				
                </Form>
			</div>
            </div>
		</div>
        </div>
        </div>
	</main>


			
        </div>
    );
}

export default Create;
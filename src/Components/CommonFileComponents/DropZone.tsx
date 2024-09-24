import React from 'react';
import { DropzoneArea } from "material-ui-dropzone";


export class Dropzone extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        files: []
      };
    }
    handleChange(files) {
      this.setState({
        files: files
      });
    }
    render() {
      return (
        <DropzoneArea
          acceptedFiles={['image/*']}
          onChange={()=>{this.handleChange.bind(this)}}
          showFileNames
          showAlerts={true}
          filesLimit={100}
          dropzoneText="Drag and Drop a file here or Click"
        />
      );
    }
  }

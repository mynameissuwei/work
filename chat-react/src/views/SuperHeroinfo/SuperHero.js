import React,{Component} from 'react'
import { List, InputItem,NavBar,ImagePicker,SegmentedControl,WingBlank,WhiteSpace,Button } from 'antd-mobile';
import { createForm } from 'rc-form';
import { connect } from 'react-redux'
import { update } from '../../redux/Actions'



	const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
	let moneyKeyboardWrapProps;
	if (isIPhone) {
	  moneyKeyboardWrapProps = {
	    onTouchStart: e => e.preventDefault(),
	  };
	}

	const data = [{
	  url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
	  id: '2121',
	}, {
	  url: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
	  id: '2122',
	}]


class ImagePickerExample extends React.Component {
  state = {
    files: data,
    multiple: false,
	}
	
  onChange = (files, type, index) => {
    console.log(files, type, index);
    this.setState({
      files,
    });
	}
	
  onSegChange = (e) => {
    const index = e.nativeEvent.selectedSegmentIndex;
    this.setState({
      multiple: index === 1,
    });
  }

  render() {
    const { files } = this.state;
    return (
      <WingBlank>
        <SegmentedControl
          values={['single', 'multiple']}
          selectedIndex={this.state.multiple ? 1 : 0}
          onChange={this.onSegChange}
        />
        <ImagePicker
          files={files}
          onChange={this.onChange}
          onImageClick={(index, fs) => console.log(index, fs)}
          selectable={files.length < 7}
          multiple={this.state.multiple}
        />
      </WingBlank>
    );
  }
}

@connect(state => state.user,{ update })

class H5NumberInputExample extends React.Component {

	constructor() {
		super(...arguments)
    this.handleonChange = this.handleonChange.bind(this)
		this.state = {
			job:'',
			demand:'',
			company:'',
      salary:'',
			type:'money'
		}
	}

	handleonChange(key,value){
		this.setState({
			[key]:value
		})
	}

	handleSave = () => {
		this.props.update(this.state)
	}

  render() {
    const { getFieldProps } = this.props.form;
		const { type } = this.state;
    return (
      <div>
				<NavBar mode='dark'>Supreme</NavBar>
				<WhiteSpace/>
				<ImagePickerExample></ImagePickerExample>
        <List>
					<InputItem placeholder='JOB' onChange={(v) => thiis,handleonChange('job',v)}>Job</InputItem>
					<InputItem placeholder='COMPANT' onChange={(v) => this.handleonChange('company',v)}>Company</InputItem>
					<InputItem placeholder='DEMAND' onChange={(v) => this.handleonChange('demand',v)}>Demand</InputItem>
          <InputItem
            type={type}
            placeholder="start from right"
            clear
            onChange={(v) => this.handleonChange('salary',v)}
            onBlur={(v) => { console.log('onBlur', v); }}
            moneyKeyboardWrapProps={moneyKeyboardWrapProps}
          >Salary</InputItem>
					<Button type='primary' onClick={this.handleSave}>save</Button>
          </List>
      </div>
    );
  }
}


const H5NumberInputExampleWrapper = createForm()(H5NumberInputExample);

export { H5NumberInputExampleWrapper }
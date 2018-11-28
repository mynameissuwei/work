import React,{Component} from 'react'
import { Redirect } from 'react-router-dom'
import { List, InputItem,NavBar,ImagePicker,SegmentedControl,WingBlank,WhiteSpace,Button,TextareaItem } from 'antd-mobile';
import { createForm } from 'rc-form';
import { connect } from 'react-redux'
import { update } from '../../redux/Actions'
import AvatarSelector from '../../components/avatar-selector/avatar-selector'



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

class Human extends React.Component {

	constructor() {
		super(...arguments)
    this.handleonChange = this.handleonChange.bind(this)
    this.selectAvator = this.selectAvator.bind(this)
		this.state = {
      avator:'',
			job:'',
			demand:''
		}
  }
  
  selectAvator(imageName) {
    this.setState({
      avator:imageName
    })
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
        {this.props.redirectTo?<Redirect to={this.props.redirectTo}></Redirect>:null}
				<NavBar mode='dark'>Supreme</NavBar>
				<WhiteSpace/>
				<AvatarSelector selectAvator={this.selectAvator}></AvatarSelector>
        <List>
					<InputItem placeholder='JOB' onChange={(v) => this.handleonChange('job',v)}>Job</InputItem>
					<TextareaItem placeholder='please input your individual resume' onChange={(v) => this.handleonChange('demand',v)} title='demand' rows={3} autoHeight></TextareaItem>
					<Button type='primary' onClick={this.handleSave}>save</Button>
          </List>
      </div>
    );
  }
}


const HumanInfo = createForm()(Human);

export { HumanInfo }
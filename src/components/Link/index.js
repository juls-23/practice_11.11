import {Component} from 'react';

class Link extends Component{
  render(){
    const {text, className, href} = this.props
    return <a href={href} className={className}>{text}</a>
  }
} 

export default Link

export default Component => class extends Component {
  render() {
    return super.render(this.props, this.state || {}, this.context)
  }
}

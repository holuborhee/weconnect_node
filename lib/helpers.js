

class Helper {
	 static requiredInBody(required, body) {
    // return true if all is present
    // and name of one not found of false;
	 }

	 static propsNotIn(obj, props) {
	 	return props.filter(p => !obj.hasOwnProperty(p));
	 }
}

export default Helper;

function getType(input) {
    let type = typeof input;
    console.log(`The tpy is: ${type}`);
    return type;
}
getType("something.")
getType(2)
getType(false)
getType({})
getType()
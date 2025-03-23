import PropTypes from 'prop-types'
function ListProp(props){

  
  const fruitList=props.itemList || null;
  const category=props.category || "Category"
  const listFruits=fruitList.map((item)=><li key={item.id}>{item.name}: &nbsp; <b>{item.calories}</b></li>)

return(

   <>
   <h2 className="list-name">{category}</h2>
    <ol className="list-items">{listFruits}</ol>
   </>
);
}
ListProp.propTypes={
  category:PropTypes.string,
  fruitList:PropTypes.arrayOf(PropTypes.shape({
                                id:PropTypes.number,
                                name:PropTypes.string,
                                calories:PropTypes.number
                                }))

}
export default ListProp
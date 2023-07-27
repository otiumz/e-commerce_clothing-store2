import Card from '../Card/Card'
import './FeaturedProducts.scss'
import useFetch from '../../hooks/useFetch';

const FeaturedProducts = ({ type }) => {

	const { data, loading, error } = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`)

	return (
		<div className='featuredProducts'>
			<div className="top">
				<h1>{type} products</h1>
				<p>
					Proin justo nunc, porttitor sit amet diam non, sodales ullamcorper velit. Nam quis magna sit amet nisl porta volutpat ac vitae ipsum. Nunc pretium erat leo, id iaculis nisi porta eget. Phasellus ullamcorper suscipit lacus, non finibus tellus. Vestibulum ultricies nisl luctus leo tempor, et hendrerit nisi viverra. Morbi et varius arcu, vel posuere nisl. Pellentesque placerat leo dui, a ullamcorper quam ullamcorper eget.
				</p>
			</div>
			<div className="bottom">
				{error ? 'This is error, oops' :
					loading ?
					'loading':
					data?.map(item => (<Card item={item} key={item.id} />))}
			</div>
		</div>

	)
}

export default FeaturedProducts
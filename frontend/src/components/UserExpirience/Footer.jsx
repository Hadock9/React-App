import { Facebook, Instagram, Twitter } from 'lucide-react'
import { Link } from 'react-router-dom'
export function Footer() {
	return (
		<footer>
			<div className='w-full h-[5vh] flex flex-row justify-center items-center text-center mt-2 gap-[30px]'>
				<Link to='https://x.com/'>
					<Twitter />
				</Link>
				<Link to='https://www.facebook.com/'>
					<Facebook />
				</Link>
				<Link to='https://www.instagram.com/'>
					<Instagram />
				</Link>
			</div>
		</footer>
	)
}

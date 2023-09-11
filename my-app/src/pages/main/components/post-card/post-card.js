import { Link } from 'react-router-dom'
import { Icon } from '../../../../components'
import styled from 'styled-components'

const PostCardContainer = ({
	className,
	id,
	title,
	imageUrl,
	publishedAt,
	commentsCount,
}) => {
	return (
		<div className={className}>
			<Link to={`/post/${id}`}>
				<img src={imageUrl} alt={title} />
				<div className="post-footer">
					<h3> {title}</h3>
					<div className="post-card-info">
						<Icon
							inactive={true}
							id="fa-calendar-o"
							margin="0 7px 0 0"
							size="18px"
						/>
						{publishedAt}
					</div>
					<div className="comments-count">
						<Icon
							inactive={true}
							id="fa-comment-o"
							margin="0 7px 0 0"
							size="18px"
						/>
						{commentsCount}
					</div>
				</div>
			</Link>
		</div>
	)
}

export const PostCard = styled(PostCardContainer)`
  
`

import { useRef } from 'react'
import { Icon, Input } from '../../../../components'
import { SpecialPanel } from '../special-panel/special-panel'
import { sanitizeContent } from './utils'
import { styled } from 'styled-components'

const PostFormContainer = ({
	className,
	post: { title, imageUrl, content, publishedAt },
}) => {
	const imageRef = useRef(null)
	const titleRef = useRef(null)
	const contentRef = useRef(null)

	const onSave = () => {
		const newImageUrl = imageRef.current.value
		const newTitleRef = titleRef.current.value
		const newContentRef = sanitizeContent(contentRef.current.innerHTML)
		console.log(newImageUrl)
		console.log(newTitleRef)
		console.log(newContentRef)
	}

	return (
		<div className={className}>
			<Input
				ref={imageRef}
				defaultValue={imageUrl}
				placeholder="Изображение..."
			/>
			<Input ref={titleRef} defaultValue={title} placeholder="Заголовок..." />
			<SpecialPanel
				publishedAt={publishedAt}
				margin="20px 0"
				editButton={
					<Icon
						id="fa-floppy-o"
						size="21px"
						margin="0 10px 0 0"
						onClick={onSave}
					/>
				}
			/>
			<div
				ref={contentRef}
				contentEditable={true}
				suppressContentEditableWarning={true}
				className="post-text"
			>
				{content}
			</div>
		</div>
	)
}

export const PostForm = styled(PostFormContainer)`
	& img {
		float: left;
		margin: 0 20px 10px 0;
	}

	& .post-text {
		font-size: 18px;
		white-space: pre-line;
	}
`

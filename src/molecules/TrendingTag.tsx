import Tag from '../atoms/Tag'

export default function TrendingTag({ position }: { position: string }) {
	return <Tag tag='Trending' color='red' position={position} />
}

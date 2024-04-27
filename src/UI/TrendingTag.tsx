import Tag from './Tag'

export default function TrendingTag({ position }: { position: string }) {
	return <Tag tag='Trending' color='red' position={position} />
}

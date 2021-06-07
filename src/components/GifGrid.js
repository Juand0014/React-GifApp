const { GifsGridItem } = require('./GifsGridItem');
const { useFetchGifs } = require("../hooks/useFetchGifs");


export const GifGrid = ({ category }) => {

    const {data:images, loading} = useFetchGifs(category);
    


    return (
        <>
            <h3 className="animate__animated animate__zoomInDown">{ category }</h3>

            { loading && <p className="animate__animated animate__zoomInDown">Loading</p>}

            {<div className='card-grid'>
                    {
                        images.length > 0 && images.map(img => (
                        <GifsGridItem
                                key={ img.id }
                                {...img }
                        />
                        ))
                    }
            </div>}
        </>
    )
}

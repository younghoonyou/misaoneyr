import React from 'react'
import GoogleMapReact from 'google-map-react'
import ScrollList from './ScrollList'

const CountryMap = (props) => {
  const {center, markers, name, zoom} = props
  const Marker = ({title, description, photo, date}) => (
    <div className='marker'>
      <div className='marker-info'>
        <p>{description}</p>
        {date}
        <img src={photo} alt={`For ${title}`} className='marker-photo' />
      </div>
      <img
        src={'/images/chick.png'}
        alt='Pin'
        className='pin-icon'
        width={'20px'}
      />
    </div>
  )
  return (
    <div className='Country-map'>
      <div className='Country-flag'>
        <img src={'images/' + name + '.png'} width='20%' alt={`For ${name}`} />
        <div className='Country-descrption'>{name} Trip</div>
      </div>
      <div className='Map-box'>
        <GoogleMapReact
          options={{gestureHandling: 'none', disableDefaultUI: true}}
          bootstrapURLKeys={{key: process.env.REACT_APP_API_KEY}}
          defaultCenter={center}
          defaultZoom={zoom}
          disableDoubleClickZoom={true}
        >
          {markers.map((marker) => (
            <Marker
              key={marker.id}
              lat={marker.lat}
              lng={marker.lng}
              date={marker.date}
              title={marker.title}
              description={marker.description}
              photo={marker.photo}
            />
          ))}
        </GoogleMapReact>
        <ScrollList content={markers} />
      </div>
    </div>
  )
}

export default CountryMap

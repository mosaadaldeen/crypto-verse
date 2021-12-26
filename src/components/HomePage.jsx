import React from 'react'

import millify from 'millify';
import {Link} from 'react-router-dom'
import {Typography, Row, Col, Statistic} from 'antd';
import Loader from './Loader'

import {useGetCryptosQuery} from '../services/CryptoApi'
import {Cryptocurrencies, News} from './index'

const {Title} = Typography;

const HomePage = () => {
  const {data, isFetching} = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;

  if (isFetching) return <Loader />;

  return (
    <>
      <Title level={2} className='heading'>Global crypto stats</Title>
      <Row>
        <Col span={12}><Statistic value={globalStats.total} title="Total Crpytocurrencies" /></Col>
        <Col span={12}><Statistic value={millify(globalStats.totalExchanges)} title="Total Exchages" /></Col>
        <Col span={12}><Statistic value={millify(globalStats.totalMarketCap)} title="Total Market Cap" /></Col>
        <Col span={12}><Statistic value={millify(globalStats.total24hVolume)} title="Total 24h Volume" /></Col>
        <Col span={12}><Statistic value={millify(globalStats.totalMarkets)} title="Total Markets" /></Col>
      </Row>
      <div className="home-heading-container">
        <Title level={2} className="home-title">Top 10 cryptocurrencies in the world</Title>
        <Title level={3} className="show-more"><Link to='/cryptocurrencies'>Show more</Link></Title>
      </div>
    <Cryptocurrencies  simplified/>

      <div className="home-heading-container">
        <Title level={2} className="home-title">Latest crypto news</Title>
        <Title level={3} className="show-more"><Link to='/news'>Show more</Link></Title>
      </div>
      <News simplified/>
    </>
  )
}

export default HomePage

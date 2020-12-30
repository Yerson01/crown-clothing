import React from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview.components';

import COLLECTIONS from './shop.data';


class ShopPage extends React.Component {
    constructor() {
        super();
        this.state = {
            collections: COLLECTIONS
        }
    }

    render() {
        const { collections } = this.state;
        return (
            <div className="shop-page">
                <h1>SHOP PAge</h1>
                {collections.map(({ id, ...otherCollectionProps }) => (
                    <CollectionPreview key={id} {...otherCollectionProps} />
                ))}
            </div>
        );
    };
}

export default ShopPage;
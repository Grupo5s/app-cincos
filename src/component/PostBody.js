import React, { useState, useEffect } from 'react';
import { Image, ScrollView } from 'react-native';
import { getFeaturedMedia } from '../service/wp';
import HTMLView from 'react-native-htmlview';

function PostBody({ post, styles }) {
    const [thumb, setThumb] = useState('');

    useEffect(() => {
        async function load(callback) {
            await getFeaturedMedia(post.featured_media).then(response => {
                var featuredMediaSrc = response.data;
                if (callback)
                    callback.call(this, `https://www.5sgrupo.com.br${featuredMediaSrc.source_url}`);
            });
        };

        load((image) => {
            setThumb(image);
        });
    }), [];


    return <><ScrollView style={styles.scrollView}>
        <Image resizeMode="stretch" source={{ uri: thumb }} style={{ width: 350, height: 180 }} />
        <HTMLView value={post.content.rendered.trim().replace(/\n/g, '')} />
    </ScrollView></>
}

export default PostBody;
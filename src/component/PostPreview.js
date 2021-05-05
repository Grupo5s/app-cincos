import React, {useState,useEffect, useRef} from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { getFeaturedMedia  } from '../service/wp';
function PostPreview({ id, title, image, styles, featuredMediaID, onPress }) {  
    const [thumb,setThumb] = useState('');
    useEffect( ()=>{
        async function load(callback) { 
            await getFeaturedMedia(featuredMediaID).then(response=>{
                var featuredMediaSrc = response.data;
                if(callback)
                    callback.call(this,`https://www.5sgrupo.com.br${featuredMediaSrc.source_url}`);
            });
        };

        load((image)=>{
            setThumb(image);
        });
    }),[];


    return <><TouchableOpacity
        onPress={()=>onPress()}>
        <Image resizeMode="stretch" source={{ uri: `${thumb}` }} style={{ width: 350, height: 180 }} />
        <View style={styles}><Text style={{ color: '#ffffff', fontWeight: 'bold' }}>{title.rendered}</Text></View>
    </TouchableOpacity></>
}

export default PostPreview;
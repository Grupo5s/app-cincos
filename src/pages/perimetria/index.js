import React from 'react';

function Perimetria() {
    return <View style={mainStyles.layout}>
        <VerticalMenu page="perimetria" navigation={navigation} />
        <ScrollView style={mainStyles.viewRecuo}>
            <PageTitle title="Perimetria" showLogo={true} />
        </ScrollView>
    </View>
}

export default Perimetria;
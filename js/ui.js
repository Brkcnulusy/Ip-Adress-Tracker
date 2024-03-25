export const _renderMapInfo = function (element, datas) {
    element.innerHTML = `
    <div class="info">
        <h4>IP Address</h4>
        <span>${datas.ip}</span>
    </div>
    <div class="info">
        <h4>Location</h4>
        <span>${datas.location.region},${datas.location.country}</span>
        <span>${datas.as.asn}</span>
    </div>
    <div class="info">
        <h4>Timezone</h4>
        <span>UTC ${datas.location.timezone}</s>
    </div>
    <div class="info">
        <h4>ISP</h4>
        <span>${datas.isp}</span>
    </div> 
    `;
}
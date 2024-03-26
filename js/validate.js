export const _validateIP = function (ip) {
    const ipRegex = /^([0-9]{1,3}\.){3}[0-9]{1,3}$/;
    if (!ipRegex.test(ip)) {
        return false; // Geçersiz formatta
    }
    
    const ipParts = ip.split(".");
    for (var i = 0; i < ipParts.length; i++) {
        var part = parseInt(ipParts[i]);
        if (part < 0 || part > 255) {
            return false; // Her bölüm 0-255 arasında olmalı
        }
    }
    
    return true; // Geçerli IP adresi
}
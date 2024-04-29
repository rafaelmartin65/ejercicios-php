<?php
    // Manejo de cURL
    // https://manuales.guebs.com/php/function.curl-setopt.html

       
    //Guia  de carga de municipios
    // https://ovc.catastro.meh.es/ovcservweb/OVCSWLocalizacionRC/OVCCallejero.asmx?op=ConsultaMunicipio

    $request = 'http://ovc.catastro.meh.es/ovcservweb/OVCSWLocalizacionRC/OVCCallejero.asmx';

    // definicion del Envelope
    $xml_post_string='<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:cat="http://www.catastro.meh.es/">
    <soapenv:Header/>
    <soapenv:Body>
       <cat:Provincia>S.C. Tenerife</cat:Provincia>
       <cat:Municipio></cat:Municipio>
    </soapenv:Body>
    </soapenv:Envelope>';
    
    // Cabecera HTTP
    $headers = array('Content-Type: text/xml;charset=UTF-8',
    'SOAPAction: "http://tempuri.org/OVCServWeb/OVCCallejero/ConsultaMunicipio"',
    'Content-Length:' .strlen($xml_post_string));

    $ch = curl_init();
    curl_setopt($ch,CURLOPT_POST,1);
    curl_setopt($ch,CURLOPT_URL,$request);
    curl_setopt($ch,CURLOPT_POSTFIELDS,$xml_post_string);
    curl_setopt($ch,CURLOPT_HTTPHEADER,$headers);
    curl_setopt($ch,CURLOPT_RETURNTRANSFER,1);
    $respuesta = curl_exec($ch);
    curl_close($ch);

    $aprocesar = str_ireplace(['SOAP-ENV:','SOAP:'],'',$respuesta);
    $datos= simplexml_load_string($aprocesar);
    var_dump($datos)
?>

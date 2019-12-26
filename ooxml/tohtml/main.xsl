<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" 
  xmlns:xs="http://www.w3.org/2001/XMLSchema" 
  xmlns:xhtml="http://www.w3.org/1999/xhtml" 
  xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" 
  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" 
  xmlns:wp="http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing" 
  xmlns:pr="http://schemas.openxmlformats.org/package/2006/relationships" 
  xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" 
  xmlns:pic="http://schemas.openxmlformats.org/drawingml/2006/picture" 
  xmlns:w14="http://schemas.microsoft.com/office/word/2010/wordml" 
  xmlns:wps="http://schemas.microsoft.com/office/word/2010/wordprocessingShape" 
  xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" 
  xmlns:svg="http://www.w3.org/2000/svg" 
  xmlns:pkg="http://schemas.microsoft.com/office/2006/xmlPackage" 
  xmlns:v="urn:schemas-microsoft-com:vml"
  exclude-result-prefixes="xs w r pr wp a pic xhtml w14 wps mc svg pkg v"
  version="2.0"
>
    <xsl:template match="pkg:package">
      <div class="axx-piece">
        <xsl:value-of select="pkg:part/pkg:xmlData/w:document/w:body/w:p/w:r/w:t" />
      </div>
    </xsl:template>
  <xsl:output method="html" indent="yes" omit-xml-declaration="yes" />
</xsl:stylesheet>
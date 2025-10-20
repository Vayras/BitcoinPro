'use client'

import { useParams } from 'next/navigation'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import './release.css'

interface ReleaseData {
  version: string
  title: string
  description: string
  releaseNotes: string
  compatibility: {
    title: string
    content: string
  }
  notableChanges: {
    title: string
    content: string
  }
  knownBugs: {
    title: string
    content: string
  }
}

// Sample release data - in a real app, this would come from an API or database
const releaseData: Record<string, ReleaseData> = {
  '29.1': {
    version: '29.1',
    title: 'Bitcoin Pro 29.1',
    description: 'Bitcoin Core installation binaries can be downloaded from bitcoincore.org and the source-code is available from the Bitcoin Core source repository.',
    releaseNotes: `Bitcoin Core version 0.14.2 is now available from:

https://bitcoincore.org/bin/bitcoin-core-0.14.2/

This is a new minor version release, including various bugfixes and performance improvements, as well as updated translations.

Please report bugs using the issue tracker at github:

https://github.com/bitcoin/bitcoin/issues

To receive security and update notifications, please subscribe to:

https://bitcoincore.org/en/list/announcements/join/`,
    compatibility: {
      title: 'Compatibility',
      content: `Bitcoin Core is extensively tested on multiple operating systems using the Linux kernel, macOS 10.8+, and Windows Vista and later.

Microsoft ended support for Windows XP on April 8th, 2014, No attempt is made to prevent installing or running the software on Windows XP, you can still do so at your own risk but be aware that there are known instabilities and issues. Please do not report issues about Windows XP to the issue tracker.

Bitcoin Core should also work on most other Unix-like systems but is not frequently tested on them.`
    },
    notableChanges: {
      title: 'Notable changes',
      content: `Bundled miniupnpc was updated to 2.0.20170509. This fixes an integer signedness error (present in MiniUPnPc v1.4.20101221 through v2.0) that allows remote attackers (within the LAN) to cause a denial of service or possibly have unspecified other impact.

This only affects users that have explicitly enabled UPnP through the GUI setting or through the -upnp option, as since the last UPnP vulnerability (in Bitcoin Core 0.10.3) it has been disabled by default.

If you use this option, it is recommended to upgrade to this version as soon as possible.`
    },
    knownBugs: {
      title: 'Known Bugs',
      content: `Since 0.14.0 the approximate transaction fee shown in Bitcoin-Qt when using coin control and smart fee estimation does not reflect any change in target from the smart fee slider. It will only present an approximate fee calculated using the default target. The fee calculated using the correct target is still applied to the transaction and shown in the final send confirmation dialog.`
    }
  }
}

export default function ReleaseDetails() {
  const params = useParams()
  const version = params.version as string
  const release = releaseData[version]

  if (!release) {
    return (
      <main className="page-container">
        <Navbar />
        <div className="release-not-found">
          <h1>Release Not Found</h1>
          <p>The release version "{version}" could not be found.</p>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="page-container">
      <Navbar />
      
      <div className="release-details-container">
        {/* Title Section */}
        <section className="rpc-docs-section">
          <div className="release-title-content">
            <div className="release-copy">
              <h1 className="release-title">{release.title}</h1>
              <p className="release-description">{release.description}</p>
            </div>
            
            <div className="release-notes-copy">
              <p className="release-notes-text">{release.releaseNotes}</p>
            </div>

            {/* Compatibility Section */}
            <div className="release-section">
              <h2 className="section-title">{release.compatibility.title}</h2>
              <p className="section-content">{release.compatibility.content}</p>
            </div>

            {/* Notable Changes Section */}
            <div className="release-section">
              <h2 className="section-title">{release.notableChanges.title}</h2>
              <p className="section-content">{release.notableChanges.content}</p>
            </div>

            {/* Known Bugs Section */}
            <div className="release-section">
              <h2 className="section-title">{release.knownBugs.title}</h2>
              <p className="section-content">{release.knownBugs.content}</p>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  )
}
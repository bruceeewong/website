import React from 'react';
import SkillCard, { SkillCardProps, SkillSection } from '../../SkillCard';

export const NetworkSkillCard = (props: Partial<SkillCardProps>) => {
  return (
    <SkillCard
      title={'Network'}
      img={'/img/network--sm.png'}
      circleClassName={'bg-purple-500'}
      shouldReset={props.shouldReset}
    >
      <SkillSection title={'Languages'} labels={['C++', 'Python']} />
      <SkillSection
        title={'Protocols'}
        labels={['HTTP(s)', 'TCP', 'UDP', '802.11', '5G']}
      />
      <SkillSection
        title={'Tools'}
        labels={[
          'Wireshark',
          'Postman',
          'curl',
          'wget',
          'ping',
          'telnet',
          'trace',
        ]}
      />
      <SkillSection title={'IDE'} labels={['Clion', 'PyCharm']} />
    </SkillCard>
  );
};

import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import Carousel from './Carousel';

const PRODUCT_INFO_TABLE = [
  { title: 'Brand (Thương hiệu)' },
  { title: 'Country of Origin (Xuất xứ)' },
  { title: 'Manufacturer name (Tên nhà sản xuất)' },
  { title: 'Manufacturer address (Địa chỉ nhà sản xuất)' },
  {
    title: 'Manual and Presevation (Hướng dẫn sử dụng và Bảo quản)',
  },
  { title: 'Warning information (Thông tin cảnh báo)' },
  { title: 'Matterial (Chất liệu)' },
];

const OPTION_TABLE = [{ title: 'Color' }, { title: 'Size' }, { title: 'Type' }];

const ProductDetail = () => {
  return (
    <Wrapper>
      <Header>
        <Title>Prouct details</Title>
        <EditBtn>
          <FontAwesomeIcon icon={faPenToSquare} size="lg" />
          <span>Edit</span>
        </EditBtn>
      </Header>

      <DateBox>
        <DateTitle>Upload date</DateTitle>
        <Date>29-04-2022 20:00</Date>
        <DateTitle>Last edited</DateTitle>
        <Date>29-04-2022 20:00</Date>
      </DateBox>

      <ProductDataSection>
        <Carousel />

        <InfoBox>
          <Info>
            <CategoryText>여성의류</CategoryText>
            <ProductNameText>
              Product Name Product Name Product Name Product Name
            </ProductNameText>
            <ProductOriginalPrice>310.000 đ</ProductOriginalPrice>
            <ProductPriceBox>
              <ProductSalePercentage>10%</ProductSalePercentage>
              <ProductPrice>279.000 ₫</ProductPrice>
            </ProductPriceBox>
            <DeliveryBadge>miễn phí vận chuyển</DeliveryBadge>
          </Info>
          <InfoBtnBox>
            <SaleBadge>On sale</SaleBadge>
            <ChageStatusBtn>Change product status</ChageStatusBtn>
          </InfoBtnBox>
        </InfoBox>
      </ProductDataSection>

      <Devider />

      <ProductInfoSection>
        <H3>Product Information</H3>
        <ProductInfoTable>
          <tbody>
            {PRODUCT_INFO_TABLE.map(({ title }) => {
              return (
                <tr key={title}>
                  <th>{title}</th>
                  <td>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Beatae autem odit expedita! Illum nam, laudantium iusto
                    quisquam qui similique incidunt!
                  </td>
                </tr>
              );
            })}
          </tbody>
        </ProductInfoTable>
      </ProductInfoSection>

      <Devider />

      <DescriptionSection>
        <H3>Description</H3>
        <Description>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
          totam voluptatem quidem facilis culpa corporis at praesentium commodi
          odit, magnam voluptas minus, repudiandae nesciunt iusto sit ex
          corrupti doloremque consequatur repellat quos id quis quae. Soluta
          alias minima distinctio repellendus quos totam nostrum quibusdam id
          dolores doloribus exercitationem, aliquam vero minus ex velit aperiam
          quae adipisci consequuntur explicabo. Corporis, repellendus aperiam
          fugit molestiae ipsa commodi, eaque eveniet eos at ex velit? Voluptas
          molestias aliquam assumenda id, eum facere doloribus, facilis omnis
          quos eligendi adipisci iusto similique numquam officia excepturi ut
          maiores illum quo fugit. Cum hic rem amet corporis eius vitae iure,
          officiis deleniti error! At ex quisquam quas totam, ab dicta fugit
          sequi eligendi quo veniam, culpa excepturi nemo non impedit labore
          quidem accusamus, laudantium fuga laborum doloribus neque blanditiis!
          Magnam, facere. Error cumque eaque placeat officia pariatur, voluptate
          sequi vel unde iure repudiandae adipisci! Incidunt deleniti facilis
          facere eos! Harum sequi ipsum ad. Earum tempora nisi quidem iure
          numquam rerum modi saepe quas eius ipsam, totam recusandae
          consequuntur. Atque saepe sint possimus veritatis, harum ducimus
          necessitatibus illum nihil doloremque laudantium porro voluptatum
          quaerat ad voluptate non. Amet voluptate numquam, alias distinctio
          illo, labore eveniet pariatur totam est ad laborum, ipsum quasi sed
          voluptas? Deserunt quam, officiis omnis quo quas fugiat, veritatis,
          repellat dignissimos asperiores eaque et dolorem quasi accusantium
          fuga tempora aut soluta cupiditate optio repellendus adipisci
          aspernatur sequi. Rerum libero iusto placeat, assumenda,
          exercitationem id reprehenderit ut quasi perspiciatis officia error,
          enim eius vero ex voluptatum quae debitis nesciunt nobis. Sit
          accusantium, ipsum inventore reiciendis possimus voluptatibus rem
          debitis at aliquid nobis nostrum impedit culpa quis alias? Est
          pariatur adipisci quia incidunt totam illum nostrum, corporis
          repudiandae ea minus officia laudantium porro exercitationem dicta
          quod ad, blanditiis harum a, ab amet inventore reiciendis odio.
          Mollitia ipsum dignissimos officia id ea accusantium sequi, debitis
          doloribus odio velit nulla corporis rerum voluptatem maiores alias!
          Totam dolorem necessitatibus ad sed labore dolore veniam beatae unde
          eligendi tenetur asperiores eaque omnis id ea, aperiam excepturi,
          nobis vero, minus facilis magni veritatis impedit quisquam pariatur
          non? Exercitationem numquam illo perferendis ratione libero quas.
          Itaque beatae ea autem voluptate eligendi eius aspernatur! Laborum
          quam temporibus nobis eos exercitationem libero molestiae quis modi
          accusantium labore illo minus nesciunt voluptas, voluptates vitae
          corporis necessitatibus repellat similique iusto inventore recusandae
          dignissimos. Illo veritatis obcaecati voluptatibus maiores fugiat
          voluptatum ab, harum, ducimus quae distinctio corporis dolorem rerum
          qui aspernatur quisquam sed perferendis vel accusantium doloribus
          provident est? Illum, eius eligendi cum doloremque, sunt at qui
          reprehenderit, vel laborum provident magni facilis quisquam eveniet
          voluptas optio cumque laudantium blanditiis porro maxime sequi velit
          odio. Quas sequi totam porro harum impedit tempora, beatae, officia a
          veritatis minus quisquam, fuga molestiae! Rerum quod non, consectetur
          aperiam delectus illo ullam magni perspiciatis, odio error iusto quos
          esse modi, at quisquam repellat! Repellat tempora earum officiis omnis
          eligendi aspernatur eum eaque quam voluptas quaerat voluptatem atque
          repellendus aut dolore, incidunt nam magni ducimus iure reprehenderit
          ea ex adipisci quasi perferendis. Obcaecati magni doloremque rem, quod
          maxime provident nemo repudiandae ut minus perspiciatis. Dolores quae,
          pariatur rem exercitationem incidunt minima obcaecati doloribus earum
          ipsum voluptatibus, officia inventore eos delectus eveniet. Sint
          nesciunt, cumque commodi suscipit obcaecati consequuntur. Suscipit
          ullam dolores eveniet hic quia? Minima vero eligendi vel dolor dolores
          est nesciunt laudantium quidem. Nisi vero sequi deleniti facilis
          impedit molestias ab nostrum dolore laboriosam similique aliquid
          tempora eos officiis eaque eligendi, placeat necessitatibus, sed nam
          numquam eius cumque vel. Molestias nam veritatis odio. Quo soluta
          voluptatibus repudiandae repellat voluptas omnis, reprehenderit
          praesentium quidem nobis enim, iure doloremque deleniti qui voluptatum
          dolores. Sequi iusto placeat inventore delectus voluptates! Eveniet
          consequatur tempora necessitatibus suscipit quaerat veritatis. Amet
          velit repellat error fuga ducimus eos mollitia ea sequi corporis
          itaque. Laborum eos quo eveniet reprehenderit ullam, ipsum
          perspiciatis. Excepturi doloremque possimus qui porro cumque, nisi ut
          explicabo? Autem, dolore atque reiciendis libero maxime, eaque dicta
          dolorum eos exercitationem fugiat cupiditate facere provident
          doloremque beatae laboriosam at suscipit officiis laborum? Corporis
          culpa asperiores necessitatibus eos, soluta quae porro molestiae ex
          odio hic debitis nostrum dolores laborum. Quaerat provident
          perspiciatis ex earum eum voluptatibus aut blanditiis assumenda sit
          eligendi non corporis facere aspernatur, quisquam modi repellendus
          quos fugiat consectetur, itaque optio nesciunt officia sequi amet.
          Quia animi corrupti saepe cumque fuga iste illo enim, id vel itaque,
          quam natus dolore sint sequi dolor et! Non a adipisci suscipit porro
          nam deserunt similique ratione eveniet in? Praesentium alias est
          repellendus amet exercitationem itaque, quos fugiat saepe deleniti
          soluta corporis, iste repudiandae necessitatibus! Aut numquam
          molestias vitae voluptate officiis dolores sit, modi quos, veniam
          quasi consectetur dicta ratione aperiam rem! Incidunt, libero
          excepturi. Aut id repudiandae, totam corporis provident molestias,
          unde qui deserunt voluptatibus numquam consequatur, reprehenderit cum
          recusandae soluta dolores libero non. Explicabo dolor tenetur ut
          eaque, rerum magnam aliquid magni vel dignissimos hic reprehenderit
          sapiente molestias earum recusandae commodi? Dolores debitis vitae
          voluptate repudiandae molestiae, explicabo, aut corrupti illum
          perferendis iusto, possimus sunt obcaecati? Suscipit mollitia sed ea
          quos fuga dolor veniam, dignissimos reprehenderit et eum neque porro
          corrupti unde voluptate non architecto quae pariatur illo eligendi
          consequatur. Laudantium ea molestias mollitia ipsam vitae reiciendis
          quaerat. Incidunt sint velit, voluptatum aliquam assumenda voluptate
          ut minima quia ipsam nobis, eligendi quis repudiandae explicabo alias!
          Placeat, porro eos cumque ut cupiditate harum, illum alias provident
          dolor natus vel voluptates, fugiat rem error ad odit delectus.
          Voluptatum praesentium consectetur sunt nesciunt iusto ex illum
          dignissimos porro esse, quibusdam laborum voluptatem quis repellendus
          sint totam! Voluptatem porro quidem consectetur laboriosam. Id laborum
          alias ut quasi ad et, ullam cumque culpa omnis atque? Tempora
          doloribus cupiditate nobis tenetur eius odio, deserunt possimus vitae
          aspernatur exercitationem ad ipsum. Sequi, porro et doloremque in sit
          cupiditate recusandae laudantium tempora ab, harum excepturi natus
          culpa tenetur iusto necessitatibus at cumque quas explicabo velit
          aperiam ea suscipit id vitae nam? Fuga rerum enim praesentium nam?
          Nisi deserunt facere labore eligendi tempore, debitis nulla placeat
          est expedita exercitationem perferendis quaerat ad, voluptatibus sequi
          ut quod sint dolorum doloremque voluptas!
        </Description>
      </DescriptionSection>

      <Devider />

      <OptionSection>
        <H3>Option</H3>
        <OptionTable>
          <tbody>
            {OPTION_TABLE.map(({ title }) => {
              return (
                <tr key={title}>
                  <th>{title}</th>
                  <td>OPTIONS, OPTIONS, OPTIONS</td>
                </tr>
              );
            })}
          </tbody>
        </OptionTable>
      </OptionSection>
    </Wrapper>
  );
};

export default ProductDetail;

const Wrapper = styled.div`
  padding: 34px 24px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h1`
  font-weight: 700;
  font-size: 26px;
  line-height: 36.4px;
  letter-spacing: -0.3px;
`;

const EditBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  width: 160px;
  height: 40px;
  border: 1px solid #dfe1e6;
  border-radius: 12px;
  background-color: #fff;
  font-size: 14px;
  cursor: pointer;
`;

const DateBox = styled.div`
  display: flex;
  font-size: 12px;
  line-height: 16px;
  margin-top: 28px;
  border: 1px solid #dfe1e6;
`;

const Date = styled.span`
  flex: 1;
  padding: 6px 8px;
`;

const DateTitle = styled(Date)`
  flex: 0.8;
  background-color: #f4f5f8;
`;

const ProductDataSection = styled.section`
  margin: 20px 0;
  display: flex;
  gap: 16px;
`;

const InfoBox = styled.div``;

const Info = styled.div`
  padding-bottom: 16px;
  border-bottom: 1px solid #eaecf0;
`;

const CategoryText = styled.span`
  display: block;
  font-size: 14px;
  line-height: 20px;
  color: #777f8b;
`;

const ProductNameText = styled.span`
  display: block;
  margin-top: 8px;
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  max-width: 328px;
`;

const ProductOriginalPrice = styled.span`
  margin-top: 2px;
  color: #aeb4be;
  font-size: 18px;
  line-height: 25px;
  text-decoration: line-through;
`;

const ProductPriceBox = styled.div`
  font-size: 22px;
  font-weight: 700;
  line-height: 31px;
  margin-top: 2px;
  margin-right: 4px;
`;

const ProductSalePercentage = styled.span`
  margin-right: 4px;
  color: #21caa1;
`;

const ProductPrice = styled.span``;

const DeliveryBadge = styled.span`
  display: block;
  width: fit-content;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  color: #3d68ff;
  background-color: #f1f4ff;
  border-radius: 4px;
  padding: 4px 6px;
  margin-top: 2px;
`;

const InfoBtnBox = styled.div`
  margin-top: 16px;
`;

const SaleBadge = styled.span`
  font-family: 'Noto Sans';
  display: block;
  width: fit-content;
  color: #2e7d31;
  font-weight: 700;
  font-size: 12px;
  line-height: 17px;
  padding: 1.5px 6px;
  background-color: #e8f5e9;
  border-radius: 4px;
`;

const ChageStatusBtn = styled.button`
  margin-top: 16px;
  color: #3d68ff;
  background-color: #fff;
  border: 1px solid #3d68ff;
  border-radius: 12px;
  padding: 11px 13px;
  font-weight: 500;
  cursor: pointer;
`;

const Devider = styled.div`
  height: 8px;
  background: #f4f5f8;
  width: calc(100% + 24 * 2);
  margin: 0 -24px;
`;

const ProductInfoSection = styled.section`
  margin: 20px 0;
`;

const ProductInfoTable = styled.table`
  margin-top: 12px;
  font-size: 12px;
  line-height: 17px;
  width: 100%;
  border: 1px solid #dfe1e6;

  & tr {
    border-bottom: 1px solid #dfe1e6;
  }
  & td {
    padding: 6px 8px;
  }
  & th {
    padding: 6px 8px;
    background-color: #f4f5f8;
    text-align: left;
    width: 232px;
  }
`;

const H3 = styled.h3`
  font-weight: 700;
  line-height: 22px;
`;

const DescriptionSection = styled.section`
  margin: 20px 0;
`;

const Description = styled.div`
  max-height: 512px;
  overflow-y: scroll;
  font-size: 14px;
  line-height: 20px;
  border: 1px solid #dfe1e6;
  border-radius: 4px;
  padding: 10px;
  margin-top: 12px;
`;

const OptionSection = styled.section`
  margin: 20px 0;
`;

const OptionTable = styled(ProductInfoTable)``;
